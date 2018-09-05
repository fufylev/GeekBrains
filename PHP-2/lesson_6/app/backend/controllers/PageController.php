<?php


namespace app\backend\controllers;

use app\common\models\Page;
use system\components\App;
use system\components\Controller;

class PageController extends Controller
{

    public function actionCreate()
    {

        $model = new Page();

        if (App::$current->request->isPost()) {
            if ($model->load(App::$current->request->post())) {
                if ($model->save()) {
                    App::$current->request->redirect(
                        'page/view?id=' . $model->id
                    );
                } else {
                    $model->addError('title', 'Error');
                }
            }
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

}