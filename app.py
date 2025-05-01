import streamlit as st

st.title("AI Skin Disease Detector")
st.write("Upload an image to get started!")

uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "png", "jpeg"])
if uploaded_file is not None:
    st.image(uploaded_file, caption='Uploaded Image', use_column_width=True)
    st.success("Prediction: Healthy Skin (Sample Output)")  # Replace with your model output
