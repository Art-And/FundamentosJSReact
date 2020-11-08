
const getImage = async() => {
  try {
    const APIKey = 'QybhUBi2UdkULISyrF29bLdEgyYUuVlo';
    const resp = await fetch(`http://api.giphy.cm/v1/gifs/random?api_key=${APIKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();

