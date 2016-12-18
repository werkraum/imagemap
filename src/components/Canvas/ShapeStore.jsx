import { observable, autorun, computed, asFlat } from 'mobx';
import $ from "jquery";

export class ShapeStore {
    request = null;

    @observable shapes_init = asFlat([]);
    @observable isLoading = true;

    loadShapes(url) {
        this.isLoading = true;
        this.request = $.getJSON(url).done(function (data) {
            this.shapes_init.replace($.makeArray(data['shapes']));
            this.isLoading = false;
        }.bind(this));
    }

    @computed get counter(){
        return this.shapes.length;
    }

    @computed get shapes(){
        return this.shapes_init;
    }
}

export default new ShapeStore
