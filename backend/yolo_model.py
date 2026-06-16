from ultralytics import YOLO


# Load YOLO pretrained model
model = YOLO("yolov8n.pt")


def detect_objects(image_path):

    results = model(image_path)

    detected_objects = []

    for result in results:
        for box in result.boxes:

            class_id = int(box.cls[0])
            confidence = float(box.conf[0])

            object_name = model.names[class_id]

            detected_objects.append(
                {
                    "object": object_name,
                    "confidence": round(confidence * 100, 2)
                }
            )

    return detected_objects