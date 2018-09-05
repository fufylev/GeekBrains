<?php
/* Smarty version 3.1.29, created on 2016-07-30 15:15:16
  from "/media/sf_src/templates/admin/control.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array(
    'has_nocache_code' => false,
    'version' => '3.1.29',
    'unifunc' => 'content_579c9a54dbba33_75579184',
    'file_dependency' =>
        array(
            '4f9ad5c5bd915dea29c2c3d73db437be32b1996f' =>
                array(
                    0 => '/media/sf_src/templates/admin/control.html',
                    1 => 1469652522,
                    2 => 'file',
                ),
        ),
    'includes' =>
        array(
            'file:../header.html' => 1,
            'file:../footer.html' => 1,
        ),
), false)) {
    function content_579c9a54dbba33_75579184($_smarty_tpl)
    {
        $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
        ?>

      <h1>Control <?php echo $_smarty_tpl->tpl_vars['name']->value; ?>
      </h1>
      <form method="POST">
        <table>
          <thead>
          <?php
          $_from = $_smarty_tpl->tpl_vars['data']->value['fields'];
          if (!is_array($_from) && !is_object($_from)) {
              settype($_from, 'array');
          }
          $__foreach_field_0_saved_item = isset($_smarty_tpl->tpl_vars['field']) ? $_smarty_tpl->tpl_vars['field'] : false;
          $_smarty_tpl->tpl_vars['field'] = new Smarty_Variable();
          $_smarty_tpl->tpl_vars['field']->_loop = false;
          foreach ($_from as $_smarty_tpl->tpl_vars['field']->value) {
              $_smarty_tpl->tpl_vars['field']->_loop = true;
              $__foreach_field_0_saved_local_item = $_smarty_tpl->tpl_vars['field'];
              ?>
            <th>
                <?php echo $_smarty_tpl->tpl_vars['field']->value['Field']; ?>

            </th>
              <?php
              $_smarty_tpl->tpl_vars['field'] = $__foreach_field_0_saved_local_item;
          }
          if ($__foreach_field_0_saved_item) {
              $_smarty_tpl->tpl_vars['field'] = $__foreach_field_0_saved_item;
          }
          ?>
          <th></th>
          </thead>
            <?php
            $_from = $_smarty_tpl->tpl_vars['data']->value['items'];
            if (!is_array($_from) && !is_object($_from)) {
                settype($_from, 'array');
            }
            $__foreach_item_1_saved_item = isset($_smarty_tpl->tpl_vars['item']) ? $_smarty_tpl->tpl_vars['item'] : false;
            $_smarty_tpl->tpl_vars['item'] = new Smarty_Variable();
            $_smarty_tpl->tpl_vars['item']->_loop = false;
            foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
                $_smarty_tpl->tpl_vars['item']->_loop = true;
                $__foreach_item_1_saved_local_item = $_smarty_tpl->tpl_vars['item'];
                ?>
              <tr>
                  <?php
                  $_from = $_smarty_tpl->tpl_vars['item']->value;
                  if (!is_array($_from) && !is_object($_from)) {
                      settype($_from, 'array');
                  }
                  $__foreach_value_2_saved_item = isset($_smarty_tpl->tpl_vars['value']) ? $_smarty_tpl->tpl_vars['value'] : false;
                  $__foreach_value_2_saved_key = isset($_smarty_tpl->tpl_vars['k']) ? $_smarty_tpl->tpl_vars['k'] : false;
                  $_smarty_tpl->tpl_vars['value'] = new Smarty_Variable();
                  $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable();
                  $_smarty_tpl->tpl_vars['value']->_loop = false;
                  foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['value']->value) {
                      $_smarty_tpl->tpl_vars['value']->_loop = true;
                      $__foreach_value_2_saved_local_item = $_smarty_tpl->tpl_vars['value'];
                      ?>
                    <td>
                      <input type="text" name="<?php echo $_smarty_tpl->tpl_vars['item']->value->id; ?>
_<?php echo $_smarty_tpl->tpl_vars['k']->value; ?>
" value="<?php echo $_smarty_tpl->tpl_vars['value']->value; ?>
" <?php if ($_smarty_tpl->tpl_vars['k']->value == 'id') { ?>DISABLED<?php } ?>>
                    </td>
                      <?php
                      $_smarty_tpl->tpl_vars['value'] = $__foreach_value_2_saved_local_item;
                  }
                  if ($__foreach_value_2_saved_item) {
                      $_smarty_tpl->tpl_vars['value'] = $__foreach_value_2_saved_item;
                  }
                  if ($__foreach_value_2_saved_key) {
                      $_smarty_tpl->tpl_vars['k'] = $__foreach_value_2_saved_key;
                  }
                  ?>
                <td>
                  <input type="submit" name="__save_<?php echo $_smarty_tpl->tpl_vars['item']->value->id; ?>
" value="Сохранить">
                  <input type="submit" name="__delete_<?php echo $_smarty_tpl->tpl_vars['item']->value->id; ?>
" value="Удалить">
                </td>
              </tr>
                <?php
                $_smarty_tpl->tpl_vars['item'] = $__foreach_item_1_saved_local_item;
            }
            if ($__foreach_item_1_saved_item) {
                $_smarty_tpl->tpl_vars['item'] = $__foreach_item_1_saved_item;
            }
            ?>
          <tr colspan="<?php echo count($_smarty_tpl->tpl_vars['fields']->value); ?>
">
            <td>Новая запись</td>
          </tr>
          <tr>
              <?php
              $_from = $_smarty_tpl->tpl_vars['data']->value['fields'];
              if (!is_array($_from) && !is_object($_from)) {
                  settype($_from, 'array');
              }
              $__foreach_field_3_saved_item = isset($_smarty_tpl->tpl_vars['field']) ? $_smarty_tpl->tpl_vars['field'] : false;
              $__foreach_field_3_saved_key = isset($_smarty_tpl->tpl_vars['k']) ? $_smarty_tpl->tpl_vars['k'] : false;
              $_smarty_tpl->tpl_vars['field'] = new Smarty_Variable();
              $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable();
              $_smarty_tpl->tpl_vars['field']->_loop = false;
              foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['field']->value) {
                  $_smarty_tpl->tpl_vars['field']->_loop = true;
                  $__foreach_field_3_saved_local_item = $_smarty_tpl->tpl_vars['field'];
                  ?>
                <td>
                  <input type="text" name="new_<?php echo $_smarty_tpl->tpl_vars['field']->value['Field']; ?>
" <?php if ($_smarty_tpl->tpl_vars['k']->value == 'id') { ?>DISABLED<?php } ?>>
                </td>
                  <?php
                  $_smarty_tpl->tpl_vars['field'] = $__foreach_field_3_saved_local_item;
              }
              if ($__foreach_field_3_saved_item) {
                  $_smarty_tpl->tpl_vars['field'] = $__foreach_field_3_saved_item;
              }
              if ($__foreach_field_3_saved_key) {
                  $_smarty_tpl->tpl_vars['k'] = $__foreach_field_3_saved_key;
              }
              ?>
            <td>
              <input type="submit" name="__create" value="Создать">
            </td>
          </tr>
        </table>
      </form>

        <?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
    }
}
