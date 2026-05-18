// Select all <a> elements inside div > div > div > h3
let xpath = "//div/div/div/h3/a";
let result = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);

let extractedNames = [""]; // Start with an empty string at index 0
let node = result.iterateNext();

while (node) {
    let title = node.getAttribute("title");
    let text = node.textContent.trim();
    extractedNames.push(title || text); // Prefer title, fallback to text
    node = result.iterateNext();
}

console.log("Extracted Names:", extractedNames);
