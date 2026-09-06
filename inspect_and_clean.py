import os
from PIL import Image

dir_path = r"C:\Users\mukes\projects\mukesh-portfolio\public\images\projectors"
for f in os.listdir(dir_path):
    if f.endswith(('.png', '.jpg', '.jpeg', '.webp')):
        fp = os.path.join(dir_path, f)
        img = Image.open(fp)
        print(f, "Mode:", img.mode, "Size:", img.size)
        rgba = img.convert("RGBA")
        w, h = rgba.size
        # Sample pixels from top-left, top-right, bottom-left, bottom-right
        corners = [
            rgba.getpixel((0, 0)),
            rgba.getpixel((5, 5)),
            rgba.getpixel((10, 10)),
            rgba.getpixel((w-1, 0)),
            rgba.getpixel((0, h-1)),
            rgba.getpixel((w-1, h-1))
        ]
        print("  Sample corners:", corners)
