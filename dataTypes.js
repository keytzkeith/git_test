let firstName = "Keith"
lastName = "Odera"

fullName = firstName.concat(" ", lastName)
// console.log(fullName[7])


let fruits = "Mango, Orange, Banana, Pineapple"
let part = fruits.toUpperCase()
// console.log(part)

// at Practical use case - you are building a breadcrumb navigation or a file path display. You always need to show the use the very last item or the file extension at the end of a string.

const filePath = "downloads/documents/invoice_final.pdf"
const fileExt = filePath.slice(-3)
// console.log(`You are uploading a format of [${fileExt}]...`)

// slice() practical use: Social media read more
const userPost = "Learning JavaScript on W3Schools is highly engaging because you get to try out code snippets live in your browser and see immediate results!"

// Extract from char 0, 100
previewSnippet = userPost.slice(0, 100)
console.log(previewSnippet.concat("..."))
