## Step 3: Configure your site

Nice work updating your home page :sparkles:

It's time we give it a little bit of **configuration** so it looks nice!

### 📖 Theory: Jekyll and \_config.yml

Jekyll uses a file titled `_config.yml` to store settings for your site, your theme, and reusable content like your site title and GitHub handle. Learn more in the [Jekyll configuration documentation](https://jekyllrb.com/docs/configuration/).

For this activity, we will use a blog-ready theme named "minima".

### ⌨️ Activity: Configure your site

1. Browse to the `_config.yml` file in the `main` branch.
1. In the upper right corner, open the file editor.
1. Add a `theme:` set to **minima** so it shows in the `_config.yml` file as below:

   ```yml
   theme: minima
   ```

1. (optional) You can modify the other configuration variables such as `title:`, `author:`, and `description:` to further customize your site.

   <details>
   <summary>Example </summary><br/>

   ```yml
   theme: minima
   title: {{ login }}'s personal blog
   description: This is where I share cool stuff about my life
   author: {{ login }}
   ```

   </details>

1. Commit your changes to the `main` branch.
1. As you commit your changes Mona will prepare the next step in this exercise!


<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you are editing the `_config.yml` file in the `main` branch`.
- Double-check your YAML formatting. Indentation and colons matter!

</details>
