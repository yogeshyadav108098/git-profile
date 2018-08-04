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
npm install --save gpm
```

## Usage
```bash
Usage: gpm [options] [command]
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
gpm list
```

2. Adding a new profile

```bash
gpm add

Enter profile title: new-profile
Enter user name: newProfile
Enter email: newProfile@gmail.com
Enter SigningKey:
```

3. Removing an existing profile

```bash
gpm remove new-profile
```

4. Update an existing profile

```bash
gpm update new-profile
Enter profile title: new-profile
Enter user name: newProfile
Enter email: newProfile@gmail.com
Enter SigningKey:
```

5. Using an existing profile

```bash
gpm use new-profile
```
