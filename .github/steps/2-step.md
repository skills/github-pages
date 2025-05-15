## Step 2: Configure your site

You turned on GitHub Pages! :tada:

### 📖 Theory: Jekyll and \_config.yml

> [!NOTE]
> Jekyll uses a file titled `_config.yml` to store settings for your site, your theme, and reusable content like your site title and GitHub handle. Learn more in the [Jekyll configuration documentation](https://jekyllrb.com/docs/configuration/).
>
> We'll work in a branch, `my-pages`, that I created for you to get this site looking great. For this activity, we will use a blog-ready theme named "minima".

### ⌨️ Activity: Configure your site

1. Browse to the `_config.yml` file in the `my-pages` branch.
1. In the upper right corner, open the file editor.
1. Add a `theme:` set to **minima** so it shows in the `_config.yml` file as below:
   ```yml
   theme: minima
   ```
1. (optional) You can modify the other configuration variables such as `title:`, `author:`, and `description:` to further customize your site.
1. Commit your changes.
1. (optional) Create a pull request to view all the changes you'll make throughout this course. Click the **Pull Requests** tab, click **New pull request**, set `base: main` and `compare:my-pages`.
1. Wait about 20 seconds then refresh this page. [GitHub Actions](https://docs.github.com/en/actions) will automatically update to the next step.

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you are editing the `_config.yml` file in the `my-pages` branch, not `main`.
- Double-check your YAML formatting. Indentation and colons matter!

</details>
