<?php
ini_set('display_errors', TRUE);
error_reporting(E_ALL);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,Accept,Authorization, X-Requested-With');
require './vendor/autoload.php';
require './help.php';

use sandeepshetty\shopify_api;

use function PHPSTORM_META\type;

if (isset($_GET["action"])) {
    $action = $_GET["action"];
    $shop = $_GET["shop"];
    if ($action == "getStorePlanChange") {
        $webhookContent = "";
        $webhook = fopen('php://input', 'rb');
        while (!feof($webhook)) {
            $webhookContent .= fread($webhook, 4096);
        }
        fclose($webhook);
        $data = json_decode($webhookContent, true);
        if ($data["plan_name"] == 'closed' || $data["plan_name"] == 'cancelled' || $data["plan_name"] == 'fraudulent') {
            $db->query("update tbl_usersettings set status = '" . $data["plan_name"] . "' where shop = '$shop' and app_id = $appId");
        } else {
            $db->query("update tbl_usersettings set status = 'active' where shop = '$shop' and app_id = $appId");
        }
    }
}
