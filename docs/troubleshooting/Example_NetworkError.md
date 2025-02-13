# Troubleshooting "Network Error" in unidadeService

## Steps to Debug:
1. **Backend Check:**  
   Ensure the backend is running and accessible at the provided URL.
2. **Emulator Settings:**  
   - For Android Emulators, try using `http://10.0.2.2:8888` as the base URL.  
   - For iOS simulators, `localhost` often works directly.
3. **Network Configuration:**  
   Confirm that your device/emulator and development machine are on the same network.
4. **Firewall/CORS:**  
   Verify that firewall settings or CORS configurations on your backend are not blocking the request.
5. **Verification:**  
   Use Postman or a browser to test the endpoint (e.g., `http://172.24.128.1:8888/unidades` or the updated URL) to ensure it returns data as expected.
