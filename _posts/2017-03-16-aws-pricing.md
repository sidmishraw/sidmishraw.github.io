---
layout: page
title: Using AWS - Billing information
---

# Using AWS - Billing information
### Free Tier - t2.micro instances:
### Usage:
* `EBS - Volumes (30 GB)` per user per month
* `EC2 - Linux - 750 Hrs` per month (This can be distributed amongst your instances.)
  So, if you have 1 instance, it can run for 750 Hrs per month
  2 instances, then you get (750 / 2) Hrs per instance per month i.e. 375 Hrs per month
* `KMS - Requests (Key Management Service) - 20,000 Requests` per month. This is never going to be
  breached in oue scenarios.

### For project, to check your current usage limits:
1. Visit [Billing dashboard](https://console.aws.amazon.com/billing/home#/)
2. Check the `Top Services by Usage` section on the dashboard. This will give insights about your
  current usage and forecast the usage for the month.

### For customized calculation of costs that we can incur:
The AWS [Cost Calculator](http://calculator.s3.amazonaws.com/index.html) will let you customize your
use case and let you estimate the cost you might incur.

### Pricing policy of Amazon:
The information about the pricing is available on [Pricing](https://aws.amazon.com/pricing/)

### Personal opinion:
* I have 3 t2.micro instances each with 8GB of EBS on AWS. Since it is free-tier, I get a max of 30 GB
on EBS per month and 750 Hrs of compute time.
* I generally put my instances to `stop` state after I'm done with my work. This is like shutting down
your machine after work. The data is saved and nothing is lost as long as we are paying them.
* Amazon charges per hour, so if the account is not on free-tier, even if the instance is `stop`ped,
if it is using EBS for storage and it has data, the AWS is going to charge per hour for the storage only.
* AWS charges for compute and storage per hour [it only includes the time the instance was in `running` state].
