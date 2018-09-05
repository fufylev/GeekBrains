<?php
/* Smarty version 3.1.29, created on 2016-07-30 22:41:03
  from "/media/sf_src/templates/categories/index.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array(
    'has_nocache_code' => false,
    'version' => '3.1.29',
    'unifunc' => 'content_579d02cf120843_30427204',
    'file_dependency' =>
        array(
            'a2c077eea3c78b1655a4f35703200e7c36f7e0cc' =>
                array(
                    0 => '/media/sf_src/templates/categories/index.html',
                    1 => 1469907404,
                    2 => 'file',
                ),
        ),
    'includes' =>
        array(
            'file:../header.html' => 1,
            'file:../footer.html' => 1,
        ),
), false)) {
    function content_579d02cf120843_30427204($_smarty_tpl)
    {
        $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
        ?>

      <div id="catalog-data">
        <ul>
            <?php
            $_from = $_smarty_tpl->tpl_vars['data']->value['subcategories'];
            if (!is_array($_from) && !is_object($_from)) {
                settype($_from, 'array');
            }
            $__foreach_subcategory_0_saved_item = isset($_smarty_tpl->tpl_vars['subcategory']) ? $_smarty_tpl->tpl_vars['subcategory'] : false;
            $_smarty_tpl->tpl_vars['subcategory'] = new Smarty_Variable();
            $_smarty_tpl->tpl_vars['subcategory']->_loop = false;
            foreach ($_from as $_smarty_tpl->tpl_vars['subcategory']->value) {
                $_smarty_tpl->tpl_vars['subcategory']->_loop = true;
                $__foreach_subcategory_0_saved_local_item = $_smarty_tpl->tpl_vars['subcategory'];
                ?>
              <li><a href="/categories/<?php echo $_smarty_tpl->tpl_vars['subcategory']->value['id']; ?>
"><?php echo $_smarty_tpl->tpl_vars['subcategory']->value['name']; ?>
                </a></li>
                <?php
                $_smarty_tpl->tpl_vars['subcategory'] = $__foreach_subcategory_0_saved_local_item;
            }
            if ($__foreach_subcategory_0_saved_item) {
                $_smarty_tpl->tpl_vars['subcategory'] = $__foreach_subcategory_0_saved_item;
            }
            ?>
        </ul>
          <?php
          $_from = $_smarty_tpl->tpl_vars['data']->value['goods'];
          if (!is_array($_from) && !is_object($_from)) {
              settype($_from, 'array');
          }
          $__foreach_good_1_saved_item = isset($_smarty_tpl->tpl_vars['good']) ? $_smarty_tpl->tpl_vars['good'] : false;
          $_smarty_tpl->tpl_vars['good'] = new Smarty_Variable();
          $_smarty_tpl->tpl_vars['good']->_loop = false;
          foreach ($_from as $_smarty_tpl->tpl_vars['good']->value) {
              $_smarty_tpl->tpl_vars['good']->_loop = true;
              $__foreach_good_1_saved_local_item = $_smarty_tpl->tpl_vars['good'];
              ?>
            <ul>
              <li>
                <div class="good">
                  <h3><?php echo $_smarty_tpl->tpl_vars['good']->value['name']; ?>
                  </h3>
                  Цена &mdash; <?php echo $_smarty_tpl->tpl_vars['good']->value['price']; ?>

                </div>
              </li>
            </ul>
              <?php
              $_smarty_tpl->tpl_vars['good'] = $__foreach_good_1_saved_local_item;
          }
          if ($__foreach_good_1_saved_item) {
              $_smarty_tpl->tpl_vars['good'] = $__foreach_good_1_saved_item;
          }
          ?>
      </div>
        <?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
    }
}
