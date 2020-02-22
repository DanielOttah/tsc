<?php
include 'include/connection.php';
$showMessage = "";
$raw_res = file_get_contents("php://input");
@session_start();

ini_set("display_errors", 1);

if ($raw_res) {
   $post = (array) json_decode($raw_res, 1);
}

function getKey($form) {
   return md5(implode("--", array_values($form)));
}

if (!empty($post) && $post["option"] == "update-payment") {
   $pdata = $post["pdata"];
   $form = $post["form"];
   $sql = "UPDATE CM_2020 SET `status`='Approved', `payment_reference`='{$pdata["trxref"]}'"
      . " WHERE `orderId`='{$pdata["order_id"]}';";
   $query = mysqli_query($connect, $sql);

   //Send the email..
   require_once "vendor/autoload.php";
   require_once "email-msg/send.php";
   $sender = new EmailSender([
      "OrderID" => $pdata["order_id"],
      "Order ID" => $pdata["order_id"],
      "Payment Status"=> "Approved",
      "Payment Date"=>date("Y-m-d"),
      "Payment Item"=>"CM " . date("Y")
   ]);
   $sender->sendEmail();

   die("Updated.");
} else if (!empty($post) && $post["option"] == "submit-cm-form") {
   $form = $post["form-data"];
   $name = $form['name'];
   $email = $form['email'];
   $phone = $form['phone'];
   $mydate = date("Y-m-d H:i:s");
   $church = $form['church'];
   $cell = $form['cell'];

   if ($name == "" || $email == "" || $phone == "" || $church == "" || $cell == "") {
      $showMessage = "Your fields cannot be empty";
   } else if ($church == "Select your local church") {
      $showMessage = "Please choose your church";
   } else {
      if (isset($_SESSION[getKey($form)])) {
         $orderId = $_SESSION[getKey($form)];
      } else {
         $orderId = mt_rand();
         $sql = "INSERT INTO CM_2020 (name, email, phone, church, cell,signup_date, orderId, status) VALUES('$name', '$email','$phone','$church', '$cell', '$mydate', '$orderId', 'Logged')";
         $query = mysqli_query($connect, $sql);

         if (!$query) {
            $orderId = "N/A";
         } else {
            $_SESSION[getKey($form)] = $orderId;
         }
      }
   }

   http_response_code(200);
   header("Content-Type: application/javascript");
   $res = [
      "status" => "success"
   ];

   if (isset($showMessage) && $showMessage != "") {
      $res["error"] = $showMessage;
      $res["status"] = "failed";
   } else {
      $res["code"] = $orderId;
      $res["key"] = "pk_live_27f607f7ee53b62ed5f6d905715478f32730ab15";
      $key = getKey($form);
      $_SESION["payment_ref"] = $orderId;
   }

   die(json_encode($res));
}

echo $showMessage;
?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Our Church is a premium HTML5 Church Website Template with Responsive design. Church Template includes many pages like Bulletin, Programs, events, sermons, ministries, working church contact form etc..">
        <meta name="keywords" content="Church, The Super Church, Reverend Walter, Reverend Gloria, Blessings, TSC, Super Church, TSC HQ">
        <meta name="author" content="The Super Church">
        <title>CM_2020 Registration | The Super Church</title>
        <!-- Bootstrap core CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <!-- Church Template CSS -->
        <link href="css/church.css" rel="stylesheet">
        <link href="css/fancybox.css" rel="stylesheet">
        <link href="css/flexslider.css" rel="stylesheet">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->

        <!-- Favicons -->
        <!-- favicons==================================== -->
        <link href="assets/images/favicons/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="assets/images/favicons/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="assets/images/favicons/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="assets/images/favicons/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="assets/images/favicons/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="assets/images/favicons/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="assets/images/favicons/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="assets/images/favicons/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="assets/images/favicons/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="assets/images/favicons/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="assets/images/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="assets/images/favicons/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="assets/images/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/images/favicons/manifest.json" rel="manifest" />
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="assets/images/favicons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <!-- Custom Google Font : Montserrat and Droid Serif -->

        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700' rel='stylesheet' type='text/css'>


    </head>


    <body>
        <!-- Navigation Bar Starts -->
        <div class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a class="navbar-brand" href="index.html"> <img src="assets/images/logo.png" alt="church logo" class="img-responsive"></a>
                </div>

                <!--/.nav-collapse -->

            </div>
        </div>
        <!--// Navbar Ends-->


        </div>
        </div>
        <!--// Navbar Ends-->

        <!--SUBPAGE HEAD-->

        <div class="subpage-head has-margin-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-3"> <img class="img-thumbnail" alt="events" src="assets/images/camp2020.jpg" style="width: 250px; height: 150px;">
                    </div>
                    <div class="col-md-9">
                        <h3>Camp Meeting 2020 | THE GATHERING</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- // END SUBPAGE HEAD -->

        <div class="container ">
            <div class="row ">
                <!--Sidebar-->
                <!--// Start-->
                <div class="col-md-3 ">
                    <div class="highlight-bg has-padding event-details has-margin-xs-bottom ">
                        <div class="ed-title ">CM 2020 - EVENT DETAILS</div>
                        <div class="ed-content "> <span class="glyphicon glyphicon-calendar "></span> 7th - 12th April, 2020 <br>
                            <span class="glyphicon glyphicon-time "></span> Morning | Evening Sessions <br>
                            <span class="glyphicon glyphicon-map-marker "></span> Lagos, NG<br>
                            <span class="glyphicon glyphicon-shopping-cart "></span> Registration - ₦2000</div>
                    </div>

                </div>

                <div class="col-md-9 has-margin-bottom ">
                    <form method="POST" action="#" enctype="multipart/form-data" data-dpmaxz-eid="1" @submit.prevent="paynow">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" class="form-control" name="name" v-model="form.name" id="InputName" placeholder="Your Name" required data-dpmaxz-eid="2">
                        </div>
                        <div class="form-group">
                            <label>Email ID</label>
                            <input type="email" class="form-control" name="email" v-model="form.email" id="InputEmail" placeholder="mighty.blessings@example.com" required data-dpmaxz-eid="3">
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" class="form-control" name="mobile" v-model="form.phone" id="InputPhoneNumber" placeholder="123 456 7895">
                        </div>
                        <div class="form-group">
                            <label for="InputChurch"> TSC Family</label>
                            <select class="form-control" v-model="form.church" data-dpmaxz-eid="4">
                            <option value="" disabled selected="selected">Select your local church</option>
                                          <option value="IKEJA [Hqtrs]">IKEJA [Hqtrs]</option>
                                          <option value="ABEOOKUTA">ABEOKUTA</option>
                                          <option value="ABUJA">ABUJA</option>
                                          <option value="GHANA">GHANA</option>
                                          <option value="AJAH">AJAH</option>
                                          <option value="ABA">ABA</option>
                                          <option value="BAYELSA">BAYELSA</option>
                                          <option value="BERKSHIRE [United Kingdom]">UK</option>
                                          <option value="CALABAR">CALABAR</option>
                                          <option value="JOHANNESBURG [South Africa]">SOUTH AFRICA</option>
                                          <option value="JOS">JOS</option>
                                          <option value="MODEL CHURCH">MODEL CHURCH</option>
                                          <option value="MISSISSAUGA [Canada]">CANADA</option>
                                          <option value="OWERRI">OWERRI 1</option>
                                          <option value="OWERRI">OWERRI 2</option>
                                          <option value="PORT HARCOURT 1">PORT HARCOURT 1</option>
                                          <option value="PORT HARCOURT 2">PORT HARCOURT 2</option>
                                          <option value="PORT HARCOURT 3">PORT HARCOURT 3</option>
                                          <option value="UYO">UYO</option>
                                       </select>
                        </div>
                        <div class="form-group">
                            <label>Cell Group</label>
                            <input type="text" class="form-control" v-model="form.cell" id="InputCell" placeholder="Your Cell Group" required data-dpmaxz-eid='5'>
                        </div>

                        <!--button type="submit" value="Submit" class="btn btn-primary btn-lg">Send message</button-->
                        <button name="submit" type="submit" class="btn btn-primary btn-lg">Pay Now</button>

                    </form>
                </div>
                <div v-show="processing">
                    <div id="paystackEmbedContainer"></div>

                    <div class="text-center col-md-12">
                        <a href="#" class="btn btn-xs btn-warning" @click="resetForm">Back to Form</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <footer>
            <div class="container ">
                <div class="row ">
                    <div class="col-sm-6 col-md-3 ">
                        <h5>ABOUT</h5>
                        <p>To preserve and restore the household of Jacob, which is the saints [<a href="# "><b>Isa. 49:6</b></a>]; to be a light to the Gentiles and the utmost parts of the earth [<a href="# "><b>Ps. 67:2</b></a>],<br> taking God's saving
                            power to every man on earth.
                        </p>
                    </div>
                    <div class="col-sm-6 col-md-3 ">
                        <h5>QUICK LINKS</h5>
                        <ul class="footer-links ">
                            <li><a href="articles.html">Articles</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="ministry.html ">Ministries</a></li>
                            <li><a href="contact.html">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 ">
                        <h5>HEADQUATERS</h5>
                        <p> THE SUPER CHURCH<br> 5/7 AGBOOLA AINA STREET <br> OFF AMORE STREET, OFF TOYIN STREET<br>IKEJA, LAGOS NG<br>
                            <br> Phone: +234 807 410 1717<br> Email: <a href="# ">office@thesuperchurch.org</a></p>
                    </div>
                    <div class="col-sm-6 col-md-3 ">
                        <h5>CONNECT</h5>
                        <div class="social-icons ">
                            <a href="https://www.facebook.com/thesuperchurchpage/ " target="_blank "><img src="assets/images/Facebook.png " alt="social "></a>
                            <a href="http://www.twitter.com/reverendwalter " target="_blank "><img src="assets/images/Twitter.png " alt="social "></a>
                            <a href="http://www.instagram.com/thesuperchurch " target="_blank "><img src="assets/images/Instagram.png " alt="social "></a>
                            <a href="https://www.youtube.com/channel/UC82w-WX3XxHsOkoEszw-mCw "><img src="assets/images/Youtube.png " target="_blank " alt="social "></a>

                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright ">
                <div class="container ">
                    <p class="text-center ">Copyright © 2020 | The Super Church | All rights reserved.</p>
                </div>
            </div>
        </footer>
        <!-- // END FOOTER -->

        <!-- Bootstrap core JavaScript
================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="js/jquery.js "></script>
        <script src="js/bootstrap.min.js "></script>
        <script src="js/ketchup.all.js "></script>
        <script src="js/script.js "></script>

        <!--=============Payment Script-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.min.js"></script>
        <script src="https://js.paystack.co/v1/inline.js"></script>
        <!--Add VueJS -->
        <script src="https://unpkg.com/vue@2.5.2/dist/vue.js"></script>

        <script type="text/javascript">
            var pay_app = new Vue({
                el: "#payment-root",
                data: {
                    form: {
                        name: "",
                        email: "",
                        phone: "",
                        family: "",
                        cell: ""
                    },
                    processing: false,
                    payment: {
                        reference: "",
                        key: ''
                    }
                },
                mounted: function() {
                    $(function() {
                        setTimeout(function() {
                            $(".fd").hide();
                            $(".fd-loaded").show().fadeIn();
                        }, 1000);
                    });
                },
                methods: {
                    updatePayment: function(pay_obj) {
                        pay_obj["order_id"] = this.payment.reference;

                        axios.post("./ILC_2018.php?option=logPayment", {
                            "option": "update-payment",
                            "pdata": pay_obj,
                            "form": this.form
                        }).then(function(res) {
                            //                     alert("Payment was successful");
                        });
                    },
                    resetForm: function() {
                        this.processing = false;
                        this.form = {
                            name: "",
                            email: "",
                            phone: "",
                            family: "",
                            cell: ""
                        };
                    },
                    initPaystack: function(res) {
                        this.processing = true;
                        this.payment.reference = res.code;
                        this.payment.key = res.key;
                        _this = this;

                        PaystackPop.setup({
                            key: this.payment.key,
                            email: this.form.email,
                            reference: this.payment.reference,
                            amount: 200000,
                            //  amount: 10000,
                            container: 'paystackEmbedContainer',
                            callback: _this.updatePayment,
                            fail: function() {
                                alert("failed");
                            }
                        });
                    },
                    payNow: function() {
                        var _this = this;

                        axios.post("./ILC_2018.php", {
                            "option": "submit-cm-form",
                            "form-data": this.form
                        }).then(function(res) {
                            var msg = res.data;

                            if (!msg.error) {
                                _this.initPaystack(msg);
                            } else {
                                alert(msg.error);
                            }
                        }).catch(function(err) {
                            console.log(err);
                        });

                        return false;
                    }
                }
            });
        </script>

    </body>

    </html>