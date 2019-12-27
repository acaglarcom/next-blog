3# Bir web sayfası oluşturmak için 2 temel dosyamız var. Bunlardan biri index.html diğeri ise style.css dosyasıdır. index.html dosyasında tasarım iskeletimizi yapacağız ve style.css dosyamız ile de iskeletimizi ayakta tutup görünüşünü belirleyeceğiz.
### Html sayfa nasıl oluşturulur?
1. style.css
2. index.html

Bir WordPress tema oluşturmak için temamızı sisteme tanıtacak ve bir bütün olarak tutup diğer sayfalarda kullanacağımız iskelet yapının şeklini belirleyip iskeleti bir canlıya dönüştürecek olan style.css dosyamızı belirleyeceğiz ve en başına temamızı tanıtacak olan şu kodları kendimize göre özelleştirip css dosyamızı WordPress’e tanıtacağız.

### style.css
Inline `code`

Indented code
``` css
/* 
Theme Name: ApiQ Blog
Theme URI: http://www.acaglar.com
Description: WordPress blog teması
Author: Abdurrahman ÇAĞLAR
Author URI: www.acaglar.com Version: 1.0
*/
 
body { 
  background:#eee; 
  font-family:Arial; 
  font-size:12px; 
  margin: 0; 
  padding: 0;
} 
#cerceve { 
  width:1000px; 
  margin:0 auto; 
  padding: 0; 
} 
#ust { 
  width: 100%; 
  min-height: 80px; 
  background: #c60000; 
} 
#index { 
  width: 70%; 
  min-height: 400px; 
  background: #aaa; 
  float: left;
}
#sidebar {
  width: 30%; 
  min-height: 400px;
  background: #555;
  float:left;
} 
#alt { 
  width:100%;
  min-height: 80px; 
  background: #008080;
  display: block;
  float: none;
} 
.clearfix:after {
  content: "."; 
  display: block; 
  clear: both; 
  visibility: hidden; 
  line-height: 0; 
  height: 0;
}
```
 

