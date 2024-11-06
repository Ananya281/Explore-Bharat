#!/usr/bin/env python
# coding: utf-8

# ## IMPORING LIBRARIES

# In[2]:


import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt
import seaborn as sns
get_ipython().run_line_magic('matplotlib', 'inline')


# ## LOADING MODEL

# In[5]:


model=tf.keras.models.load_model('trained_model.keras')


# In[7]:


model.summary()


# ## VISUALISING SINGLE IMAGE OF TEST SET

# In[10]:


import cv2
image_path1='test/test/AppleCedarRust1.JPG'

# READING IMAGE
img1=cv2.imread(image_path1)
img1=cv2.cvtColor(img1,cv2.COLOR_BGR2RGB) # CONVERT BGR TO RGB

# DISPLAYING IMAGE
plt.imshow(img1)
plt.title('TEST IMAGE')
plt.xticks([])
plt.yticks([])


# ## TESTING MODEL

# In[13]:


image1=tf.keras.preprocessing.image.load_img(image_path1,target_size=(64,64))
input_arr1=tf.keras.preprocessing.image.img_to_array(image1)
input_arr1=np.array([input_arr1]) # CONVERT SINGLE IMAGE TO BATCH
print(input_arr1)
print(input_arr1.shape)


# In[15]:


prediction1=model.predict(input_arr1)
prediction1,prediction1.shape


# In[17]:


result_index1=np.argmax(prediction1)
result_index1


# In[19]:


class_name=['Apple___Apple_scab',
 'Apple___Black_rot',
 'Apple___Cedar_apple_rust',
 'Apple___healthy',
 'Blueberry___healthy',
 'Cherry_(including_sour)___Powdery_mildew',
 'Cherry_(including_sour)___healthy',
 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
 'Corn_(maize)___Common_rust_',
 'Corn_(maize)___Northern_Leaf_Blight',
 'Corn_(maize)___healthy',
 'Grape___Black_rot',
 'Grape___Esca_(Black_Measles)',
 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
 'Grape___healthy',
 'Orange___Haunglongbing_(Citrus_greening)',
 'Peach___Bacterial_spot',
 'Peach___healthy',
 'Pepper,_bell___Bacterial_spot',
 'Pepper,_bell___healthy',
 'Potato___Early_blight',
 'Potato___Late_blight',
 'Potato___healthy',
 'Raspberry___healthy',
 'Soybean___healthy',
 'Squash___Powdery_mildew',
 'Strawberry___Leaf_scorch',
 'Strawberry___healthy',
 'Tomato___Bacterial_spot',
 'Tomato___Early_blight',
 'Tomato___Late_blight',
 'Tomato___Leaf_Mold',
 'Tomato___Septoria_leaf_spot',
 'Tomato___Spider_mites Two-spotted_spider_mite',
 'Tomato___Target_Spot',
 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
 'Tomato___Tomato_mosaic_virus',
 'Tomato___healthy']


# In[21]:


model_prediction1=class_name[result_index1]
plt.imshow(img1)
plt.title(f"NAME: {model_prediction1}")
plt.xticks([])
plt.yticks([])
model_prediction1


# In[ ]:




