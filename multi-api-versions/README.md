# Cats API
## Overview

This is a sample API meant to illustate how to use versioning in Istio. It is a small API that stores information on cats within an in-memory database.

## Requirements

You will need the following to use the Kubernetes features:

1. A Kuberentes cluster - a quick way to get started is using the one included with Docker Desktop
2. kubectl
2. Istio - You'll need to get the necessary containers running in your Kuberentes cluster for istio. You can find instructions to do this in their [documentation](https://istio.io/latest/docs/setup/getting-started/#install)

## Building the app
You can build the app using docker.

`docker build -t testingapi:latest .`

For the purposes of versioning, the Kubernetes deployment yaml files look at the latest tag and v2 tag, but you can modify these for any version you wish.

## Deploying to Kubernetes
The [k8](./k8) folder has all the yaml files for creating all the necessary components to deploy and expose this application.

To deploy them, run `kubectl apply -f ./k8`