import os
from rembg import remove
from PIL import Image

input_dir = r"C:\Users\mukes\projects\mukesh-portfolio\public\images\projectors"
output_dir = r"C:\Users\mukes\projects\mukesh-portfolio\public\images\projectors\isolated"

os.makedirs(output_dir, exist_ok=True)

files = [f for f in os.listdir(input_dir) if f.endswith(('.png', '.jpg', '.jpeg', '.webp'))]

for f in files:
    in_path = os.path.join(input_dir, f)
    out_name = os.path.splitext(f)[0] + "_clean.png"
    out_path = os.path.join(output_dir, out_name)
    print(f"Processing {f} -> {out_name}...")
    try:
        inp = Image.open(in_path)
        output = remove(inp)

        # Autocrop transparent borders
        bbox = output.getbbox()
        if bbox:
            output = output.crop(bbox)

        output.save(out_path, "PNG")
        print(f"Successfully created: {out_name} with size {output.size}")
    except Exception as e:
        print(f"Error processing {f}: {e}")

print("All background removals complete!")
