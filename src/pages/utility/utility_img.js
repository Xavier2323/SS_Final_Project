import {decode as atob, encode as btoa} from 'base-64';
import axios from 'axios';

splitstrlength = (str) => {
    var pos = 0;
    var len = str.length;
    len /= 2;
    var by_Array = new Array();
    for (var i = 0; i < len; i++) {
        var splitstr = str.substr(pos, 2);
        var by_16 = parseInt(splitstr, 16);
        by_Array.push(by_16);
        pos += 2;
    }
    return by_Array;
}

bufferjoin = (buffer) => {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);//bota一定要加
}

export const get_img = (str) => {
    console.log('get_img_uri');
    var joinStr = '';
    for (var i = 0; i < str.length; i++) {
        joinStr = joinStr + str[i];
    }
    var split = splitstrlength(joinStr);
    var joinbuffer = bufferjoin(split);
    return 'data:image/png;base64,' + joinbuffer;
}

export const upload_img = async (userid, photonum, uri)=>{
  console.log([userid, photonum, uri]);
  var data = new FormData();
  var result;

  data.append('image',
      { uri: uri, name: 'image.jpg', type: 'image/jpeg' }
  );
    
  var config_post = {
      method: 'post',
      url: `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/image/update?userid=${userid}&photo=${photonum}`,
      headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
      },
      data: data,
  };

  console.log('post');
  await axios(config_post)
  .then((res) => {
      result=res.data.profile[`photo${photonum}`];
      console.log(res.data);
  })
  .catch((error) => {
      console.log(error);
  });

  return result;
}

export const set_pfpimg = async (uri)=>{
    var data = new FormData();
    var result=-1;
  
    data.append('image',
        { uri: uri, name: 'image.jpg', type: 'image/jpeg' }
    );
      
    var config_post = {
        method: 'post',
        url: `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/image/upload`,
        headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: data,
    };
  
    console.log('post');
    await axios(config_post)
    .then((res) => {
        result=res.data.id;
        console.log(result);
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    });
    return result;
  }