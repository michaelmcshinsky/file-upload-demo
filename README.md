#File Upload Demo

## Objective

To show a minimal example for uploading images in the same API call as your form data for creating a table entry in your database and storing an image online. The demo is not meant to be all encompassing and meet the various situations and one-off needs that come with image handling between the client and the server.

### Main Technologies

1. Express
2. Handlebars
3. AWS S3 Bucket

### Installation

1. Clone repo to local computer.
```
git clone https://github.com/michaelmcshinsky/file-upload-demo.git
cd file-upload-demo
```
2. Setup .env file from .env.example
2.1 You will need your [KEY and SECRET from AWS](https://www.msp360.com/resources/blog/how-to-find-your-aws-access-key-id-and-secret-access-key/)
4. Create local database with the same name from your .env file.
3. Install packages. `yarn install` or `npm install`
5. Run the demo. `yarn start` or `npm start`.

### Files of note.

There is a lot of architecural code in the demo for scaffolding out a working demo. The files of note that would be of most interest are:

#### Frontend

Uploading of the image from the frontend.
1. `/views/create.handlebars`
2. `public/js/create.js`

#### Backend

Storing image and table rows in S3 and server database.
1. `/routes/api/posts.js`
2. `/utils/file-service.js`

### Missing Features

Features which should be considered when expanding upon this example.

0. Folder structure in the S3 Bucket. Allocating images to unique folders based on user, product, post, etc...
1. Image tranformation. One or many images sizes stored/altered. What is the maximum upload size.
2. Upload validation. If the table creation fails, destory the image stored, or wait until entity creation success before completing image storage.
3. Image validation. What kind of image types (png, jpg, etc...) are accepted.
4. Business rules behind image acceptance could include rating of image (PG, PG-Y7, PG-13, R, NSFW, etc...). This may require a image learning and checking system.
5. Upload avenues. Currently only one way to upload an image with strict acceptance criteria on propery name. This could be made more dynamic and DRY.
6. CDN. Ability to tie S3 with a CDN and reduce distibution costs.

### Simple S3 Bucket Permissions

You should make your permissions more verbose and locked down as needed than this example.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion",
                "s3:GetObjectAcl"
            ],
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

### Contributors

[Michael McShinsky](https://github.com/michaelmcshinsky)
[Joshua Duncan](https://github.com/jduncan9720)