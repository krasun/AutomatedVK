# AutomatedVK

Scripts for automation of repetitive tasks at VK.com.

## Usage

### Remove outgoing friendship requests

To remove outgoing friendship requests you must navigate to [this page](http://vk.com/friends?section=out_requests) then put the next code at your browser's address bar and wait for some time:

```
javascript:var scriptElement = document.createElement('script'); scriptElement.src = 'https://raw.github.com/krasun/AutomatedVK/master/remove-outgoing-friendship-requests.js'; document.body.appendChild(scriptElement);```

## License

All scripts are under the MIT license. See the complete license [here](https://github.com/krasun/AutomatedVK/blob/master/LICENSE).