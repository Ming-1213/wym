const getAudioUrl = (base64Data) => {
    // 创建一个数组来存储字节数据
      var byteArrays = [];
      // 使用atob()将Base64编码的字符串解码为原始二进制字符串
      // atob: ASCII to Binary
      var byteCharacters = atob(base64Data);
      // 遍历解码后的二进制字符串的每个字符
      for (var offset = 0; offset < byteCharacters.length; offset++) {
          // 将每个字符转换为其ASCII码值（0-255之间的数字）
          var byteArray = byteCharacters.charCodeAt(offset);
          // 将ASCII码值添加到字节数组中
          byteArrays.push(byteArray);
      }
      // 创建一个Blob对象
      // new Uint8Array(byteArrays)将普通数组转换为8位无符号整数数组
      // { type: 'audio/mp3' } 指定Blob的MIME类型为MP3音频
      
      var blob = new Blob([new Uint8Array(byteArrays)], { type: 'audio/mp3' });
       // 使用URL.createObjectURL创建一个临时的URL
      // 这个URL可以用于<audio>标签的src属性
      // 这个URL在当前页面/会话有效，页面关闭后会自动释放
      // 创建一个临时 URL 供音频播放
      return URL.createObjectURL(blob);
  }