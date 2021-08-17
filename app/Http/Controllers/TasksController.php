<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasks;

class TasksController extends Controller
{
    public function index()
    {
        return response()->json(Tasks::orderBy('id','desc')->get());
    }

}
