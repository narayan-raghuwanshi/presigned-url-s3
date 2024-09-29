This application uses presigned URLs to upload and fetch files from S3. The benefits of presigned URLs are that they reduce server load because the server does not need to forward file data to the client, the client can directly access it.


```bash 
git clone https://github.com/narayan-raghuwanshi/presigned-url-s3
```
```bash
cd presigned-url-s3
```
```bash
npm install
```
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
