#!/bin/bash

# Specify the directory where you want to create the script file
target_directory="./.git/hooks/"
git config --local --unset core.hooksPath
git config --local core.hooksPath ".git/hooks/"

# Function to create and write hook files
function create_hooks(){
    script_path="$1/$2"
    if [ -d "$1" ]; then
       # Check if the script file already exists
       if [ -f "$script_path" ]; then
        echo "Script file '$2' already exists in '$1'."
       else
        # Create the script file with the specified content
        echo -e "$3" > "$script_path"
        chmod +x "$script_path"
        echo "Script file '$2' created in '$1'."
       fi
    else
    echo "Target directory '$target_directory' does not exist."
    fi
}
create_hooks "$target_directory" "pre-commit" "#!/bin/bash\n\n npm run pre-commit-translate \n npm run pre-commit-lint \n"
create_hooks "$target_directory" "commit-msg" "#!/bin/bash\n\n npx --no -- commitlint --edit $1 \n"
