# SmartPace


https://runappproject.xyz


SmartPace is an application that allows users to recieve a pace prediction for any race they would like to run - whether it be a 5k, 10k, or a marathon!

You can also request an ai-generated run plan, which will create a weekly plan for your next race.

Technologies used: Python/Flask for backend, and React.js for forntend. Projected is dpeloyed on AWS using an S3 bucket in a CloudFront distribution for the frontend, and the backend was containerized and deployed on ECS, using EC2 instances. An Application Load Balancer was used to process, and send https requests from the frontend to the backend.


