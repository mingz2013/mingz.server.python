# -*- coding:utf-8 -*-
__author__ = 'zhaojm'

from flask import Blueprint, render_template

api = Blueprint('game_controller', __name__, url_prefix='/game_2')

#
# @api.route('/', methods=['GET'])
# def index():
#     return render_template("game/index.html")
#
#
# @api.route('/main', methods=['GET'])
# def game():
#     return render_template("game/index.html")
#