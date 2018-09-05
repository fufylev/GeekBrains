<?php
/* Smarty version 3.1.29, created on 2016-07-30 22:39:53
  from "/media/sf_src/templates/index/index.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array(
    'has_nocache_code' => false,
    'version' => '3.1.29',
    'unifunc' => 'content_579d028993a518_40925727',
    'file_dependency' =>
        array(
            'd58be4497f8e6dc69ca632dceabc70ddfa551965' =>
                array(
                    0 => '/media/sf_src/templates/index/index.html',
                    1 => 1469902472,
                    2 => 'file',
                ),
        ),
    'includes' =>
        array(
            'file:../header.html' => 1,
            'file:../footer.html' => 1,
        ),
), false)) {
    function content_579d028993a518_40925727($_smarty_tpl)
    {
        $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../header.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
        ?>

      hello, people!
        <?php $_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:../footer.html", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
    }
}
