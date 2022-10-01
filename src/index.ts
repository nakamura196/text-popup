function getSelected() {
  if (window.getSelection) {
    return window.getSelection();
  } else if (document.getSelection) {
    return document.getSelection();
  } else {
    const document = window.document as any;
    var selection = document.selection && document.selection.createRange();
    if (selection.text) {
      return selection.text;
    }
    return false;
  }
}

function mouseUp(event: any) {
  var selection = getSelected();
  selection = String(selection).trim();
  const e = document.getElementById("popup-tag");
  if (!e) {
    return;
  }
  if (selection != "") {
    
    e.style.display = "block";
    e.style.top = `${event.clientY}px`;
    e.style.left = `${event.clientX}px`;
    let texts = []
    for(let i = 0; i < 10; i ++) {
        texts.push(selection)
    }
    e.innerHTML = texts.join(" | ");
  } else {
    e.style.display = "none";
  }
}

export const textPopup = function (id: string): void {
  document.addEventListener("mouseup", function (event) {
    mouseUp(event);
  });

  const body = document.getElementsByTagName("body")[0];
  let e: any = document.createElement("div");
  e.id = "popup-tag";
  e.style.position = "absolute";
  e.style.padding = "8px";
  e.style.margin = "8px";
  e.style["background-color"] = "white"
  e.style.display = "none"
  e.style["max-width"] = "400px"
  e.style["max-height"] = "300px"
  e.style["overflow-y"] = "auto"
  e.style["border-style"] = "solid"
  e.style["border-color"] = "lightgray"
  body.append(e);
};
