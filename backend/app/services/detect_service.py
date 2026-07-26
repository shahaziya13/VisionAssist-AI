from ultralytics import YOLO
import os

model = YOLO("yolov8n.pt")

RESULT_DIR = "results"
os.makedirs(RESULT_DIR, exist_ok=True)


def detect_objects(image_path):

    results = model(image_path)

    detected = []

    output_image = None

    for result in results:

        for box in result.boxes:

            cls = int(box.cls[0])

            confidence = float(box.conf[0])

            detected.append({
                "object": model.names[cls],
                "confidence": round(confidence, 2)
            })

        plotted = result.plot()

        filename = os.path.basename(image_path)

        output_image = os.path.join(
            RESULT_DIR,
            filename
        )

        import cv2
        cv2.imwrite(output_image, plotted)

    return detected, output_image