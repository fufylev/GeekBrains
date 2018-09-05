<?php
/* Smarty version 3.1.29, created on 2016-07-30 21:15:16
  from "/media/sf_src/templates/admin/index.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array(
    'has_nocache_code' => false,
    'version' => '3.1.29',
    'unifunc' => 'content_579ceeb4392297_43405010',
    'file_dependency' =>
        array(
            'fff35fae9cbb95a4b59ce62afd3d45dfee3f747b' =>
                array(
                    0 => '/media/sf_src/templates/admin/index.html',
                    1 => 1469902475,
                    2 => 'file',
                ),
        ),
    'includes' =>
        array(
            'file:../header.html' => 1,
            'file:../footer.html' => 1,
        ),
), false)) {
    function content_579ceeb4392297_43405010($_smarty_tpl)
    {
        $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
        ?>

      <h1>Control</h1>
      <ul>
          <?php
          $_from = $_smarty_tpl->tpl_vars['data']->value['controls'];
          if (!is_array($_from) && !is_object($_from)) {
              settype($_from, 'array');
          }
          $__foreach_control_0_saved_item = isset($_smarty_tpl->tpl_vars['control']) ? $_smarty_tpl->tpl_vars['control'] : false;
          $__foreach_control_0_saved_key = isset($_smarty_tpl->tpl_vars['k']) ? $_smarty_tpl->tpl_vars['k'] : false;
          $_smarty_tpl->tpl_vars['control'] = new Smarty_Variable();
          $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable();
          $_smarty_tpl->tpl_vars['control']->_loop = false;
          foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['control']->value) {
              $_smarty_tpl->tpl_vars['control']->_loop = true;
              $__foreach_control_0_saved_local_item = $_smarty_tpl->tpl_vars['control'];
              ?>
            <li><a href="/index.php?page=admin&action=control&id=<?php echo $_smarty_tpl->tpl_vars['k']->value; ?>
"><?php echo $_smarty_tpl->tpl_vars['control']->value; ?>
              </a></li>
              <?php
              $_smarty_tpl->tpl_vars['control'] = $__foreach_control_0_saved_local_item;
          }
          if ($__foreach_control_0_saved_item) {
              $_smarty_tpl->tpl_vars['control'] = $__foreach_control_0_saved_item;
          }
          if ($__foreach_control_0_saved_key) {
              $_smarty_tpl->tpl_vars['k'] = $__foreach_control_0_saved_key;
          }
          ?>
      </ul>


        <?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
    }
}
