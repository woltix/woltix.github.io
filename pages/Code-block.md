---
title: Code block
nav_order: 5
---

# Code block

## Ex 1


```html
<div class="class">
    <ul>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    <li>
      <a href=""></a>Lorem ipsum dolor.</li>
    </ul>
</div>
```

## Ex 2  

```javascript
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
```  

## Ex 3  

```json
{"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}   
```

