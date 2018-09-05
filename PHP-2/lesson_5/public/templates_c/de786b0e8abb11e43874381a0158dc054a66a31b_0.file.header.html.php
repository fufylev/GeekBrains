<?php
/* Smarty version 3.1.29, created on 2016-07-30 22:44:35
  from "/media/sf_src/templates/header.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array(
    'has_nocache_code' => false,
    'version' => '3.1.29',
    'unifunc' => 'content_579d03a3eb5305_27506467',
    'file_dependency' =>
        array(
            'de786b0e8abb11e43874381a0158dc054a66a31b' =>
                array(
                    0 => '/media/sf_src/templates/header.html',
                    1 => 1469907872,
                    2 => 'file',
                ),
        ),
    'includes' =>
        array(),
), false)) {
    function content_579d03a3eb5305_27506467($_smarty_tpl)
    {
        ?>
      <!DOCTYPE html>
      <html>
      <head>
        <title><?php echo $_smarty_tpl->tpl_vars['title']->value; ?>
        </title>
      </head>
        <?php echo '<script'; ?>
      type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"><?php echo '</script'; ?>
      >
        <?php echo '<script'; ?>
      type="text/javascript" src="/js/category.js"><?php echo '</script'; ?>
      >
    <body>
    <ul>
        <?php
        $_from = $_smarty_tpl->tpl_vars['categories']->value;
        if (!is_array($_from) && !is_object($_from)) {
            settype($_from, 'array');
        }
        $__foreach_category_0_saved_item = isset($_smarty_tpl->tpl_vars['category']) ? $_smarty_tpl->tpl_vars['category'] : false;
        $_smarty_tpl->tpl_vars['category'] = new Smarty_Variable();
        $_smarty_tpl->tpl_vars['category']->_loop = false;
        foreach ($_from as $_smarty_tpl->tpl_vars['category']->value) {
            $_smarty_tpl->tpl_vars['category']->_loop = true;
            $__foreach_category_0_saved_local_item = $_smarty_tpl->tpl_vars['category'];
            ?>
          <li>
            <a href="/categories/<?php echo $_smarty_tpl->tpl_vars['category']->value['id']; ?>
" link="<?php echo $_smarty_tpl->tpl_vars['category']->value['id']; ?>
" class="category-link"><?php echo $_smarty_tpl->tpl_vars['category']->value['name']; ?>
            </a>
          </li>
            <?php
            $_smarty_tpl->tpl_vars['category'] = $__foreach_category_0_saved_local_item;
        }
        if ($__foreach_category_0_saved_item) {
            $_smarty_tpl->tpl_vars['category'] = $__foreach_category_0_saved_item;
        }
        ?>
    </ul>



    <?php }
}
