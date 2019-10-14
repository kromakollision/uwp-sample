(function(){

    window.addEventListener('DOMContentLoaded', function(){

        var btn = document.querySelector('#openwin');
        btn.addEventListener('click', openWin);
        var winRef = null;

        function openWin() {
            var url = "http://localhost:8080/window.html";
            var title = "New window";
            console.log('open win', winRef, winRef && winRef.closed);
            if (winRef) {
                winRef.close();
            }
            winRef = window.open(url, title);
        }
    });
})();