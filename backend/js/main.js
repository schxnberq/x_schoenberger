document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector("pre")) {
        var prezz = document.querySelectorAll("pre");

        prezz.forEach(function (pre) {
            pre.classList.add("style-pre");
        })
    }


    if (document.querySelector("select")) {
        function selectFocus(ev) {
            if (ev.target.selectedIndex == 0) {
                ev.target.classList.remove("live");
                ev.target.classList.add("pending");
                ev.target.parentNode.parentNode.querySelector("div.image img").style.border = "2px solid #eb86ae";
            }
            if (ev.target.selectedIndex == 1) {
                ev.target.classList.remove("pending");
                ev.target.classList.add("live");
                ev.target.parentNode.parentNode.querySelector("div.image img").style.border = "2px solid #18e1e3";
            }
        }


        var selectzz = document.querySelectorAll("select");

        selectzz.forEach(function (value) {
            value.addEventListener("change", selectFocus);
        });

        var selected = document.querySelectorAll("select option[data-select='1']");

        selected.forEach(function (value) {
            if (value.getAttribute("value") == "pending") {
                value.parentNode.classList.remove("live");
                value.parentNode.classList.add("pending");
                value.parentNode.parentNode.parentNode.querySelector("div.image img").style.border = "2px solid #eb86ae";
            } else {
                value.parentNode.classList.remove("pending");
                value.parentNode.classList.add("live");
                value.parentNode.parentNode.parentNode.querySelector("div.image img").style.border = "2px solid #18e1e3";
            }
        })
    }

    if (document.querySelector(".form__group.keywords")) {

        function updateCatalog(item_id, category, status, album, keywords) {

            jQuery.post("backend/?page=update_catalog", {
                update_catalog: 'isset',
                item_id: item_id,
                category: category,
                album: album,
                status: status,
                keywords: keywords
            });

        }


        // CATEGORY //
        var category = document.querySelectorAll(".form__group.category input");

        category.forEach(function (value) {
            value.addEventListener("click", function (ev) {
                var item_id = ev.target.parentNode.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");

                var item_category = ev.target.getAttribute("value");

                updateCatalog(item_id, item_category, "", "", "");

            })

        })
        // CATEGORY END //


        // STATUS //
        var status = document.querySelectorAll(".form__group.status select");

        status.forEach(function (value) {
            value.addEventListener("change", function (ev) {
                var item_id = ev.target.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");

                var item_status = "";
                if (ev.target.selectedIndex == 0) {
                    item_status = 'pending';
                } else {
                    item_status = 'live';
                }

                updateCatalog(item_id, "", item_status, "", "");
            })
        })

        // STATUS END //


        // KEYWORDS //
        var keyword_cnt = document.querySelectorAll(".form__group.keywords ul.keyword-cnt");

        function doKeyword(ev) {

            var item_id = ev.target.parentNode.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");

            if (ev.keyCode == 188 || ev.keyCode == 13 || ev.keyCode == 9) {

                ev.target.setAttribute("contenteditable", "false");
                ev.target.setAttribute("spellcheck", "false");
                ev.target.setAttribute("class", "set");
                ev.target.setAttribute("data-value", ev.target.innerHTML);
                var exit = document.createElement("i");
                exit.setAttribute("class", "remove");
                ev.target.appendChild(exit);

                var wrap_word = document.createElement("li");
                wrap_word.setAttribute("contenteditable", "true");
                wrap_word.setAttribute("spellcheck", "false");
                wrap_word.setAttribute("class", "edit");
                ev.target.parentNode.appendChild(wrap_word);


                ev.target.nextElementSibling.addEventListener("keydown", doKeyword);

                var all_keywords = ev.target.parentNode.querySelectorAll("li.set");
                var get_keywords = [];
                all_keywords.forEach(function (value) {
                    var fin_val = value.innerHTML.split("<i")[0];
                    get_keywords.push(fin_val);
                })
                var item_keywords = get_keywords.join("::");


                updateCatalog(item_id, "", "", "", item_keywords);
            }

        }

        keyword_cnt.forEach(function (value) {
            value.querySelector("li.edit").addEventListener("click", function (ev) {
                ev.target.innerHTML = "";
            });

            value.querySelector("li.edit").addEventListener("keydown", doKeyword);

            if (value.querySelector("li.set i.remove")) {
                var remove_links = value.querySelectorAll("li.set i.remove");

                remove_links.forEach(function (value2) {
                    value2.addEventListener("click", function (ev) {
                        var item_id = ev.target.parentNode.parentNode.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");


                        if (ev.target.parentNode.parentNode.querySelectorAll("li.set").length <= 1) {
                            ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
                            updateCatalog(item_id, "", "", "", " ");
                        } else {
                            var all_keywords = "";
                            if (ev.target.parentNode.parentNode.children.length > 1) {
                                all_keywords = ev.target.parentNode.parentNode.querySelectorAll("li.set");
                            } else {
                                all_keywords = ev.target.parentNode.parentNode.querySelector("li.set");
                            }
                            console.log(all_keywords);
                            var get_keywords = [];
                            all_keywords.forEach(function (value) {
                                var fin_val = value.innerHTML.split("<i")[0].replace(/\s/g, '');
                                if (ev.target.parentNode.innerHTML.split("<i")[0].replace(/\s/g, '') == fin_val) {
                                    ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);
                                } else {
                                    get_keywords.push(fin_val);
                                }
                            });
                            console.log(get_keywords);
                            var item_keywords = get_keywords.join("::");
                            console.log(item_keywords);
                            updateCatalog(item_id, "", "", "", item_keywords);
                        }


                    });
                })
            }
        })
        // KEYWORDS END //

        var album_cnt = document.querySelectorAll(".form__group.album ul.album-cnt");


        function doAlbum(ev) {

            var item_id = ev.target.parentNode.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");

            if (ev.keyCode == 188 || ev.keyCode == 13 || ev.keyCode == 9) {


                var exit = document.createElement("i");
                exit.setAttribute("class", "remove");
                ev.target.appendChild(exit);

                var album = ev.target.innerHTML.split("<i")[0];

                updateCatalog(item_id, "", "", album, " ");
            }
        }


        album_cnt.forEach(function (value) {


            value.querySelector("li.edit").addEventListener("keydown", doAlbum);
            value.querySelector("li.edit").addEventListener("blur", doAlbum);

            if (value.querySelector("li.set i.remove")) {
                var remove_links = value.querySelectorAll("li.set i.remove");

                remove_links.forEach(function (value2) {
                    value2.addEventListener("click", function (ev) {
                        var item_id = ev.target.parentNode.parentNode.parentNode.parentNode.querySelector("input[name='item-id']").getAttribute("value");

                        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode);

                        var album = "";

                        //updateCatalog(item_id, "", "", album, " ");


                    });
                })
            }
        })

    }

})