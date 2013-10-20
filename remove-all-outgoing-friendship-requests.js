(function(window, document, VKCurrentState, VKFriends) {
    function VKAdapter(VKCurrentState, VKFriends) {
        var options = {
            'loadTimeSpan': 500
        };

        this.getLoadTimeSpan = function() {
            return options.loadTimeSpan;
        }
    
        this.areAllOutRequestsLoaded = function() {
            return VKCurrentState.outRequestsCount == VKCurrentState.shownFriends;
        };

        this.tryLoadMoreRequests = function() {   
            if (this.areAllOutRequestsLoaded()) {
                return false;
            }

            VKFriends.showMore();
            return true;
        };

        this.removeOutRequests = function() {
            var allButtons = document.getElementsByTagName('button');            
            for (var i = 0; i < allButtons.length; i++) {
                var button = allButtons[i];
                if (button.id.indexOf('deny') == -1) {
                    continue;
                }

                button.onclick();
            }
        };
    };

    window.AutomatedVK = window.AutomatedVK || {}; 
    window.AutomatedVK.adapter = new VKAdapter(VKCurrentState, VKFriends);

    var timeoutId;
    (function load() {       
        var adapter = window.AutomatedVK.adapter;
        if ( ! adapter.tryLoadMoreRequests()) {            
            window.clearTimeout(timeoutId);
            adapter.removeOutRequests();
        } else {
            timeoutId = window.setTimeout(load, adapter.getLoadTimeSpan());
        }
    })();
})(window, window.document, window.cur, window.Friends);