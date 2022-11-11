# Dog_Breed_Categorization

### Topic:
- Image classification for dog breeds.

### Purpose:
- Sometimes people are out and about when they see a cute dog that they know nothing about but would like to. My group and I are working on a project that can help people identify a dog's breed based off an image. Our goal is to create a web app that can help people identify what type of dog they run into, and maybe some basic information about the breed type. 

### Data Sources:
- Images of 120 different dog breeds with multiple images per breed type provided by:
    - https://www.kaggle.com/datasets/jessicali9530/stanford-dogs-dataset

- A csv file listing all the different dog breeds and their attributes
    - akc-data-latest.csv 
    - Downloaded from the following GitHub profile:
        - https://github.com/tmfilho/akcdata
        - License for the data: https://github.com/tmfilho/akcdata/blob/master/LICENSE 

### Communication:
- Tuesday/Thursday during regular class zoom meets
- Zoom meets outside of class (as necessary)
- Slack messages

### Machine Learning:
- For our project, the machine learning algorithm we decided to work with is a deep neural network, as we are trying to train the machine to recognize images of dogs to then predict what breed a specific dog image belongs to. We have attempted to try and build our own deep neural network from scratch, but have failed to reach any kind of decent accuracy with those attempts. Since we were unable to get higher than 15% accuracy while building our own model from scratch, we decided to use a transfer learning model which has already been trained with large and generalized datasets. There are multiple different transfer learning models available, so we will try a few different ones which will be enhanced with our specific data, and pick one that gives us the best results. Our goal is to use a model that will give us 80% validation accuracy with our testing data.