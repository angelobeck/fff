
function message(fromAny) {
    document.getElementById("message").innerHTML = messageAny(fromAny);
}

function messageAny(fromAny) {
    if (fromAny === undefined) {
        return "undefined";
    } else if (fromAny === null) {
        return "null";
    } else if (fromAny === true) {
        return "true";
    } else if (fromAny === false) {
        return "false";
    } else if (Array.isArray(fromAny)) {
        return messageArray(fromAny);
    } else if (typeof (fromAny) === "object") {
        return messageObject(fromAny);
    } else if (typeof (fromAny) === "string") {
        return '"' + fromAny + '"';
    } else {
        return fromAny.toString();
    }
}

function messageArray(fromArray) {
    if (fromArray.length === 0) {
        return "[]";
    }
    var buffer = "[";
    for (let i = 0; i < fromArray.length; i++) {
        if(i > 0) {
            buffer += ",";
        }
        buffer += "<br>" + messageAny(fromArray[i]);
    }
    return buffer + "<br>]";
}

function messageObject(fromObject) {
    var isFirstElement = true;
    var buffer = "{";
    for (var field in fromObject) {
        if (isFirstElement) {
            isFirstElement = false;
        }else{
            buffer += ",";
        }
        buffer += "<br>";
        const value = fromObject[field];
        buffer += field + ": " + messageAny(value);
    }
    if(!isFirstElement) {
        buffer += "<br>";
    }
    return buffer + "}";
}
