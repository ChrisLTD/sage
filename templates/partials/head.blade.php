<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  @php(wp_head())

  <script type="text/javascript">
    window.ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
    window.networkurl = "<?php echo network_site_url(); ?>";
    window.homeurl = '<?php echo home_url(); ?>';
  </script>
</head>
