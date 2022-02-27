So ofcourse, one of the first things I want to talk about on this blog is how I
created the blogging system you are looking at right now, and how im planning
to change it in the future.

This portfolio website does not actually have a backend, For the contact form
on the home page i use discord webhooks, and for the blogging system, im using
github.

In the repository for this portfolio, I have a special folder named `src/blog`
in which is a json file containing an array of all the markdown files that make
up the posts, and the actual markdown files.

Then when you load this blog page, it will perform a get request to read that
json file (`src/blog/posts.json`) and return the array of blog post files.

I then itterate over the blog post files, to retrieve the contents of the blog
posts and use that to display.

The title and date of the blog posts are retrieved from the filename.

```js
const blogEndpoint = "https://raw.githubusercontent.com/justlucdewit/justlucdewit.github.io/master/src/blog/";

// Get list of all blog names
const blogPostNames = (await axios.get(blogEndpoint + "posts.json")).data;

const that = this;
for (const blogPostName of blogPostNames) {
    
    // Retrieve the blog title and date from the file name
    const blogNameParts = blogPostName.split('-');
    const blogTitle = blogNameParts.pop().split('.md')[0];
    const blogDate = blogNameParts.join("/");

    // Perform the GET request to get the file contents
    axios.get(blogEndpoint + blogPostName).then(x => {
        that.blogs.push({
            fileName: blogPostName,
            title: blogTitle,
            content: x.data,
            date: blogDate
        });
    });
}
```