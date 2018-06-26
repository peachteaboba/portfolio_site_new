/**
 * Created by Andy Feng on 5/11/16.
 */

// this is our users.js file located at /server/controllers/users.js
// :::::::::::::   CONTROLLER   :::::::::::::::
var mongoose = require('mongoose');  // need to require mongoose to be able to run mongoose.model()
var Met = mongoose.model('Mets');  // access our model through var User


module.exports = (function() {
    return {
        indexM: function(req, res) {

            var q = Met.find({});
            q.exec(function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('successfully retrieved all METRICS'.green);
                    res.json(results);  // ----------> Return all users in the callback as JSON data
                }
            })
        },
        indexI: function(req, res) {

            var i = new Met;

            // initialize metrics data
            i.page = 0;
            i.show = 0;
            i.sub = 0;
            i.ham = 0;
            i.linkedIn = 0;
            i.gitHub = 0;
            i.email = 0;


            i.save(function(err) {
                if(err) {
                    console.log('something with wrong -----> indexI method in the Users Controller'.red);
                } else {
                    console.log('success!!'.green);
                    res.redirect('/allMetrics');
                }
            });
        },
        incPage: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.page ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incShow: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.show ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incSub: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.sub ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incHam: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.ham ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incLI: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.linkedIn ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incGH: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.gitHub ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incINST: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    if(results.inst == undefined){
                        results.inst = 0;
                    }


                    results.inst ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },
        incEmail: function(req, res) {
            Met.findOne({}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> findOne method in the Users Controller'.red);
                } else {
                    results.email ++;
                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            res.redirect('/allMetrics');
                        }
                    });
                }
            });
        },

















        index: function(req, res) {
            // var q = User.find({}).sort({'score': -1}).limit(20);
            var q = User.find({}).sort({'score': -1});
            q.exec(function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    console.log('successfully retrieved all users (by "all" I mean ALL!)'.green);
                    res.json(results);  // ----------> Return all users in the callback as JSON data
                }
            })
        },

        show: function(req, res){
            User.findOne({_id: req.params.id}, function(err, results) {
                if(err) console.log(err);
                res.json(results);  // ----------> Return single user info in the callback as JSON data
            })
        },

        delete: function(req, res) {
            User.remove({_id: req.params.id}, function(err) {
                if (err) {
                    console.log('something with wrong -----> delete method in the Users Controller'.red);
                } else {
                    console.log('successfully deleted user'.green);
                    res.redirect('/allUsers');
                }
            })
        },

        edit: function(req, res) {
            User.findOne({_id: req.body._id}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> edit method in the Users Controller'.red);
                } else {
                    results.display_name = req.body.display_name;
                    results.real_name = req.body.real_name;
                    results.score = req.body.score;
                    results.wins = req.body.wins;
                    results.losses = req.body.losses;
                    results.role = req.body.role;

                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> edit-save method in the Users Controller'.red);
                        } else {
                            console.log('successfully edited user'.green);
                            res.redirect('/allUsers');
                        }
                    });
                }
            });
        },

        addScore: function(req, res) {

            //console.log('IM IN THE CONTROLLER!!!!!'.yellow);
            //console.log(req.body);
            //console.log('IM IN THE CONTROLLER!!!!!'.yellow);






            User.findOne({_id: req.body.id}, function(err, results) {
                if(err) {
                    console.log('something with wrong -----> addScore method in the Users Controller'.red);
                } else {
                    results.score += req.body.winnings;
                    results.wins += req.body.wins;
                    results.losses += req.body.losses;

                    results.save(function(err) {
                        if(err) {
                            console.log('something with wrong -----> addScore method in the Users Controller'.red);
                        } else {
                            //console.log('successfully added score to user'.green);
                            res.redirect('/user/' + req.body.id);
                        }
                    });
                }
            });
        },
        peopleImageLinks: function(req, res) {

            var results = {
                "Luke Skywalker": "http://i.imgur.com/I2YdZAx.jpg",
                "C-3PO": "http://i.imgur.com/lD5TE5h.jpg",
                "R2-D2": "http://i.imgur.com/mRuHDZ4.jpg",
                "Darth Vader": "http://i.imgur.com/ehiLUra.jpg",
                "Leia Organa": "http://i.imgur.com/bzSl3gr.jpg",
                "Owen Lars": "http://i.imgur.com/boj970y.jpg",
                "Beru Whitesun lars": "http://i.imgur.com/Nqv917u.jpg",
                "R5-D4": "http://i.imgur.com/f2Flu6w.jpg",
                "Biggs Darklighter": "http://i.imgur.com/vt5Kmld.jpg",
                "Obi-Wan Kenobi": "http://i.imgur.com/WIh13aV.jpg",
                "Anakin Skywalker": "http://i.imgur.com/gkmOmN3.jpg",
                "Wilhuff Tarkin": "http://i.imgur.com/zSAhrkq.jpg",
                "Chewbacca": "http://i.imgur.com/azvMS9j.jpg",
                "Han Solo": "http://i.imgur.com/XFN9vV1.jpg",
                "Greedo": "http://i.imgur.com/rpep857.jpg",
                "Jabba Desilijic Tiure": "http://i.imgur.com/QgzJt4t.jpg",



                "Wedge Antilles": "http://i.imgur.com/JiOfGMu.jpg",
                "Jek Tono Porkins": "http://i.imgur.com/0FGsYkr.jpg",
                "Yoda": "http://i.imgur.com/sYTIkQ8.jpg",
                "Palpatine": "http://i.imgur.com/cjoojoO.jpg",
                "Boba Fett": "http://i.imgur.com/ZJ3Ie7f.jpg",
                "IG-88": "http://i.imgur.com/rhJLLJP.jpg",
                "Bossk": "http://i.imgur.com/V9rW4dJ.png",
                "Lando Calrissian": "http://i.imgur.com/Q6CKfrW.jpgg",
                "Lobot": "http://i.imgur.com/zqyr5hT.jpg",
                "Ackbar": "http://i.imgur.com/VkppExg.jpg",
                "Mon Mothma": "http://i.imgur.com/DyMzF3Q.jpg",
                "Arvel Crynyd": "http://i.imgur.com/sXFSqMN.jpg",
                "Wicket Systri Warrick": "http://i.imgur.com/o3CPqH8.jpg",
                "Nien Nunb": "http://i.imgur.com/SWWhqVJ.jpg",
                "Qui-Gon Jinn": "http://i.imgur.com/BMeWjRG.jpg",
                "Nute Gunray": "http://i.imgur.com/W5Kd9bO.jpg",
                "Finis Valorum": "http://i.imgur.com/GoqS34A.jpg",
                "Jar Jar Binks": "http://i.imgur.com/94lVDlV.jpg",
                "Roos Tarpals": "http://i.imgur.com/hRpTNoO.jpg",
                "Rugor Nass": "http://i.imgur.com/KaKvwvA.jpg",
                "Ric Olié": "http://i.imgur.com/keHVmak.jpg",
                "Watto": "http://i.imgur.com/L95xsfd.jpg",
                "Sebulba": "http://i.imgur.com/ThiUi4n.jpg",
                "Quarsh Panaka": "http://i.imgur.com/u8NEnhR.jpg",
                "Shmi Skywalker": "http://i.imgur.com/9r06BUa.jpg",
                "Darth Maul": "http://i.imgur.com/WIfTf8P.jpg",
                "Bib Fortuna": "http://i.imgur.com/KcLUTmm.jpg",
                "Ayla Secura": "http://i.imgur.com/Z8ld2Cw.jpg",
                "Dud Bolt": "http://i.imgur.com/Aeq6bFI.jpg",
                "Gasgano": "http://i.imgur.com/FqRMGfY.jpg",
                "Ben Quadinaros": "http://i.imgur.com/bwjLS00.jpg",
                "Mace Windu": "http://i.imgur.com/AxG1dP9.jpg"



 



            };




            res.json(results);
        }























    }
})();













