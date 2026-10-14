from PIL import Image
import numpy as np

img = Image.open(r"c:\Users\MD maheen\Documents\hi\public\images\hero-left-foliage.jpg").convert("RGBA")
data = np.array(img)

# The background is cream/off-white (R ~ 235-255, G ~ 240-255, B ~ 230-255)
# Leaves are distinctly green/purple/dark
r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]

# Pixels where green is higher than red and blue, or where darkness is significant (leaves)
# Or where color deviates from neutral pale cream
is_cream = (r > 215) & (g > 220) & (b > 210) & (np.abs(r.astype(int) - g.astype(int)) < 30)

# Set alpha: transparent for cream background, opaque for leaves
# Soft transition
alpha = np.where(is_cream, 0, 255).astype(np.uint8)

# Only keep the left/top leaves (x < 140 in original scale = x < 280 in 2x)
x_coords = np.tile(np.arange(data.shape[1]), (data.shape[0], 1))
alpha = np.where(x_coords > 260, 0, alpha)

data[:, :, 3] = alpha
result = Image.fromarray(data)
result.save(r"c:\Users\MD maheen\Documents\hi\public\images\foliage-left.png")
print("Left foliage PNG created with transparent background!")
