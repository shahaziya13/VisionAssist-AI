import pytesseract
from PIL import Image, ImageEnhance, ImageFilter


pytesseract.pytesseract.tesseract_cmd = (
    r"C:/Users/Lenovo/OneDrive/Desktop/VisionAssistAI/tesseract.exe"
)


def extract_text(image_path):

    image = Image.open(image_path)

    # Convert to grayscale
    image = image.convert("L")

    # Increase contrast
    image = ImageEnhance.Contrast(image).enhance(2)

    # Sharpen image
    image = image.filter(ImageFilter.SHARPEN)

    text = pytesseract.image_to_string(
        image,
        config="--psm 6"
    )

    return text.strip()