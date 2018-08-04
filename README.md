<img
    src="assets/gitProfileManager.png"
    alt="Git Profile Manager"
/>

# Git Profile Manager
> Manage and save git profiles smoothly and user friendly.

## Preface ##
In normal scenario, a user can have more than one profile. One office profile and one home profile. Switching between two profiles can be hectic. This library aims to make it smoothly.

## Features ##
1. Create a new git profile.
2. Remove an existing git profile.
3. Update an existing git profile.
4. Use an existing git profile.
5. List all existing profiles.

## Have a problem? Come chat with us! ##
[LinkedIn](https://www.linkedin.com/in/yogeshyadav108098)<br />
[Twitter](https://twitter.com/Yogeshyadav098)<br />
[Github](https://github.com/yogeshyadav108098)<br />
[Gmail](<mailto:yogeshyadav108098@gmail.com>)

## Maintained by ##
[Yogesh Yadav](https://www.linkedin.com/in/yogeshyadav108098/)

## Getting started. ##
Git profile manager will work on all systems which can run node.

## Install
```bash
npm install --save git-pm
```

## Usage
```bash
Usage: git-pm [options] [command]
```

Options:

```bash
-v, --version          output the version number
-h, --help             output usage information
```

Commands:

```bash
add                    Add new git profile
list                   List git profiles
remove <profileTitle>  Remove existing git profile
update <profileTitle>  Update existing git profile
use <profileTitle>     Use existing git profile
```

## Examples

1. List all existing profiles

```bash
git-pm list
```

2. Adding a new profile

```bash
git-pm add

Enter profile title: new-profile
Enter user name: newProfile
Enter email: newProfile@gmail.com
Enter SigningKey:
```

3. Removing an existing profile

```bash
git-pm remove new-profile
```

4. Update an existing profile

```bash
git-pm update new-profile

Enter profile title: new-profile
Enter user name: newProfile
Enter email: newProfile@gmail.com
Enter SigningKey:
```

5. Using an existing profile

```bash
git-pm use new-profile
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like
 - **Paytm** You can make one-time donations via Paytm (+91-7411000282). I'll probably buy a coffee.
 - **UPI** You can make one-time donations via UPI (7411000282@paytm). I'll probably buy a coffee.
 - **Bitcoin** You can send me bitcoins at this address (or scanning the code below): `3BKvX4Rck6B69JZMuPFFCPif4dSctSxJQ5`

Thanks!


## Where is this library used?
If you are using this library in one of your projects, add it here.


## License
MIT © [Yogesh Yadav](https://www.linkedin.com/in/yogeshyadav108098/)

[contributing]: /CONTRIBUTING.md