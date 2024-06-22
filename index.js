hexo.extend.filter.register('after_post_render', function(data){
    // 添加调试信息，打印当前时间戳和消息
    console.log("Debug: hexo-footer-plugin is running at", new Date().toISOString());
  
    const { config } = hexo;

    const isEnabled = config['hexo-footer-plugin']?.enable;

    if(!isEnabled){
      console.warn("hexo-footer-plugin 插件尚未启用!!");
      return;
    }

    // console.log("data",data);

    console.warn("hexo-footer-plugin 插件开始运行....");

    const copyrightOwner = config['hexo-footer-plugin']?.copyright_owner;
  
    if (!copyrightOwner) {
      console.warn("Warning: copyright_owner is not set in the configuration.");
      return data;
    }
  
    console.log("copyrightOwner:", copyrightOwner);
  
    // 构建版权声明字符串
    var footer = "\n<div id='custom-footer'>© " + new Date().getFullYear() + " " + copyrightOwner + "</div>";
  
    // 将版权声明添加到文章内容的末尾
    data.content += footer;
  
    // 再次添加调试信息，确认版权声明已被添加
    console.log("Debug: footer added to post content");
  
    // 返回修改后的内容
    return data;
  });