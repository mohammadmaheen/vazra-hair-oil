import urllib.request
import urllib.parse
import json
import os
import io
from PIL import Image

os.makedirs('public/images/botanical', exist_ok=True)

# Curated direct Wikimedia Commons / Botanical image queries
herbs_data = [
    ('cocos-nucifera', 'Cocos nucifera coconut palm fruit', 'Cocos nucifera'),
    ('murraya-koenigii', 'Murraya koenigii curry leaves plant', 'Murraya koenigii'),
    ('phyllanthus-emblica', 'Phyllanthus emblica amla fruit branch', 'Phyllanthus emblica'),
    ('eclipta-prostrata', 'Eclipta prostrata false daisy flower', 'Eclipta prostrata'),
    ('hibiscus-rosa-sinensis', 'Hibiscus rosa-sinensis red flower', 'Hibiscus rosa-sinensis'),
    ('azadirachta-indica', 'Azadirachta indica neem leaves tree', 'Azadirachta indica'),
    ('trigonella-foenum-graecum', 'Trigonella foenum-graecum fenugreek seeds', 'Trigonella foenum-graecum'),
    ('aloe-barbadensis', 'Aloe vera plant green leaves', 'Aloe barbadensis'),
    ('bacopa-monnieri', 'Bacopa monnieri brahmi water hyssop plant', 'Bacopa monnieri'),
    ('sesamum-indicum', 'Sesame seeds white background plant', 'Sesamum indicum'),
    ('ricinus-communis', 'Ricinus communis castor oil plant leaves', 'Ricinus communis'),
    ('allium-cepa', 'Red onion bulb fresh Allium cepa', 'Allium cepa'),
    ('allium-sativum', 'Garlic bulb fresh cloves Allium sativum', 'Allium sativum'),
    ('salvia-rosmarinus', 'Fresh rosemary sprig herb leaves', 'Salvia rosmarinus'),
    ('nigella-sativa', 'Nigella sativa black cumin kalonji seeds', 'Nigella sativa')
]

headers = {'User-Agent': 'VazraHairOilBot/2.0 (education; contact@vazranatural.com)'}

for slug, query, sci in herbs_data:
    target_path = f'public/images/botanical/{slug}.jpg'
    if os.path.exists(target_path) and os.path.getsize(target_path) > 10000:
        print(f'Already exists: {slug}')
        continue

    url = f'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime|size&format=json'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            img_url = None
            for pid, p in pages.items():
                ii = p.get('imageinfo', [])
                if ii:
                    mime = ii[0].get('mime')
                    size = ii[0].get('size', 0)
                    u = ii[0].get('url')
                    if mime in ['image/jpeg', 'image/png'] and size > 30000:
                        img_url = u
                        break
            if img_url:
                print(f'Downloading {slug} from {img_url[:60]}...')
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req, timeout=15) as img_resp:
                    img_data = img_resp.read()
                    im = Image.open(io.BytesIO(img_data)).convert('RGB')
                    w, h = im.size
                    side = min(w, h)
                    left = (w - side) // 2
                    top = (h - side) // 2
                    square = im.crop((left, top, left + side, top + side))
                    square = square.resize((400, 400), Image.Resampling.LANCZOS)
                    square.save(target_path, quality=92)
                    print(f'Successfully saved {slug}')
            else:
                print(f'No image URL found for {slug}')
    except Exception as e:
        print(f'Error fetching {slug}:', e)

print('Done!')
